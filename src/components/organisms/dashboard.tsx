"use client";
import { useEffect, useState } from "react";

type UserData = {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rolId: string;
  permisos: string[];
  // Add other fields as needed
};

type Role = {
  rolId: string;
  nombreRol: string;
  permisos: string[];
};
const token = localStorage.getItem("token");

export default function Dashboard() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    // Get token and userId from localStorage
    const userId = localStorage.getItem("userId");

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

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <span className="text-lg">Cargando...</span>
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
          <strong>Rol:</strong> {role?.nombreRol}
        </p>
        <div>
          <strong>Actividades/Permisos:</strong>
        </div>
      </div>
    </main>
  );
}
