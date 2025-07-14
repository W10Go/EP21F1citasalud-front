import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale"; // For Spanish formatting

type Activity = {
  id: number;
  created_at: string;
  log_type: number;
  user_id: string;
};
type ActivitiesByDate = {
  [date: string]: Activity[];
};

type ActivityCounts = {
  [type: string]: number;
};

export default function ActivityDashboard({
  activities,
}: {
  activities: Activity[];
}) {
  // Group activities by date
  const activitiesByDate = activities.reduce<ActivitiesByDate>(
    (acc, activity) => {
      const date = format(parseISO(activity.created_at), "yyyy-MM-dd");
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(activity);
      return acc;
    },
    {}
  );

  // Count activities by type
  const activityCounts = activities.reduce<ActivityCounts>((acc, activity) => {
    acc[activity.log_type] = (acc[activity.log_type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard de Actividades
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-blue-800 font-semibold">Total Actividades</h3>
          <p className="text-2xl font-bold text-blue-600">
            {activities.length}
          </p>
        </div>
        {Object.entries(activityCounts).map(([type, count]) => (
          <div
            key={type}
            className="bg-green-50 p-4 rounded-lg border border-green-100"
          >
            <h3 className="text-green-800 font-semibold">
              {type === "1" ? "Registro de Usuario" : "Inicio de Sesión"}
            </h3>
            <p className="text-2xl font-bold text-green-600">{count}</p>
          </div>
        ))}
      </div>

      {/* Activity Timeline */}
      <div className="space-y-6">
        {Object.entries(activitiesByDate).map(([date, dailyActivities]) => (
          <div key={date}>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              {format(parseISO(date), "EEEE, d MMMM yyyy", { locale: es })}
            </h2>
            <div className="space-y-3 pl-6 border-l-2 border-blue-200">
              {dailyActivities.map((activity) => (
                <div key={activity.id} className="relative pb-4">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-1 border-2 border-white"></div>
                  <div className="ml-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-800">
                        Actividad #{activity.log_type}
                      </span>
                      <span className="text-sm text-gray-500">
                        {format(parseISO(activity.created_at), "HH:mm:ss")}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Registrado el{" "}
                      {format(parseISO(activity.created_at), "PPpp", {
                        locale: es,
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activities.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No hay actividades para mostrar.</p>
        </div>
      )}
    </div>
  );
}
