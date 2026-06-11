import { useEffect } from "react";

export default function AuthProtection({ role }) {

  useEffect(() => {

    const userRole =
      localStorage.getItem("role");

    if (userRole !== role) {

      window.location.replace("/");

    }

  }, [role]);

  return null;
}
