import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [students, setStudents] = useState([]);
  const getData = async () => {

    try {
      await axios.get("https://api-datanerds.vercel.app/api/").then((response) => {
        let l_data = new Array(response.data);
        setStudents(l_data);
        console.log(l_data);
      });
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {

    getData();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <table className="w-full table-auto text-sm" aria-describedby="students" >
    <thead>
        <tr className="bg-slate-800 text-slate-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Numéro</th>
            <th className="px-4 py-2">Prénom</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Date de naissance</th>
            <th className="px-4 py-2">Mathématiques</th>
            <th className="px-4 py-2">Français</th>
            <th className="px-4 py-2">Histoire</th>
        </tr>
    </thead>
    <tbody>
      {
        students.map((student) => {
          return (
            <tr className="bg-slate-100" key={student.id}>
                <td className="px-4 py-2 text-center">{student["id"]}</td>
                <td className="px-4 py-2 text-center">{student.num}</td>
                <td className="px-4 py-2 text-center">{student.prenom}</td>
                <td className="px-4 py-2 text-center">{student.nom}</td>
                <td className="px-4 py-2 text-center">{student.date_naissance}</td>
                <td className="px-4 py-2 text-center">{student.math}</td>
                <td className="px-4 py-2 text-center">{student.francais}</td>
                <td className="px-4 py-2 text-center">{student.histoire}</td>
            </tr>
          )
        })
      }
    </tbody>
</table>
    </main>
  );
}
