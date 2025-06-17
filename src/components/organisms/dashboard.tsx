"use client";
import { useEffect, useState } from "react";

type UserData = {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rolId: string;
  permisos: string[];
};

type Activity = {
  actividadId: number;
  usuario: UserData;
  tipoActividad: string;
  descripcion: string;
  fechaHora: string;
  detalleAdiccionales: string;
};

export default function Dashboard() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Get token and userId from localStorage
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!token || !userId) {
      window.location.href = "/login"; // Redirect to login if not authenticated
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `https://ep21f1citasalud-back-pruebas.onrender.com/api/usuarios/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setUser(data);
          if (data.rolId === 1) {
            setRole("ADMINISTRADOR");
          } else if (data.rolId === 2) {
            setRole("MEDICO");
          } else if (data.rolId === 3) {
            setRole("PACIENTE");
          }
        } else {
          alert("No se pudo obtener la información del usuario.");
          window.location.href = "/";
        }
      } catch (error) {
        alert("Error de conexión." + error);
        window.location.href = "/";
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem("token");

    const fetchRoles = async () => {
      try {
        const res = await fetch(
          `https://ep21f1citasalud-back-pruebas.onrender.com/api/roles/${user?.rolId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const roleData = await res.json();
          setRole(roleData);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, [user]);

  useEffect(() => {
    if (!user || !role) return;
    const token = localStorage.getItem("token");

    const fetchActivities = async () => {
      try {
        if (!user) return;
        if (!role) return;
        const res = await fetch(
          `https://ep21f1citasalud-back-pruebas.onrender.com/api/actividad-usuario/usuario/${user?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const activitiesRes = await res.json();
          setActivities(activitiesRes);
          console.log("Actividades:", activitiesRes);
        } else {
          console.error("Error fetching activities");
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, [role, user]);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <span className="text-lg">Cargando...</span>
      </main>
    );
  }
  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <span className="text-lg">Cargando actividades...</span>
      </main>
    );
  }

  if (!user) {
    return null;
  }
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          ¡Bienvenido, {user.nombre} {user.apellido}!
        </h1>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-2">
          <strong>Rol:</strong> {role ?? "No asignado"}
        </p>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Dashboard de Actividades</h1>
        {activities.length > 0 ? (
          <ul className="list-disc ml-6">
            {activities.map((activity) => (
              <li key={activity.actividadId}>{activity.fechaHora}</li>
            ))}
          </ul>
        ) : (
          <p>No hay actividades para mostrar.</p>
        )}
      </div>
    </main>
  );
}
