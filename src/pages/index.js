import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { get_data } from "@/repository/repository";
import Upload from "./textuploadtofb";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [students, setStudents] = useState([]);
  const get_all = async () => {
    const data = await get_data();
    setStudents(data);
    console.log(data);
  }

  useEffect(() => {
    get_all();
  }, [])

  return (
    <main
      className={` min-h-screen  p-24 ${inter.className}`}
    >
      {/* <table className="w-full table-auto text-sm" aria-describedby="students" >
    <thead>
        <tr className="bg-slate-800 text-slate-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nsenameuméro</th>
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
                <td className="px-4 py-2 text-center text-slate-800">{student.id}</td>
                <td className="px-4 py-2 text-center text-slate-800">{student.username}</td>
                <td className="px-4 py-2 text-center text-slate-800">3{student.prenom}</td>
                <td className="px-4 py-2 text-center text-slate-800">4{student.nom}</td>
                <td className="px-4 py-2 text-center text-slate-800">5{student.date_naissance}</td>
                <td className="px-4 py-2 text-center text-slate-800">6{student.math}</td>
                <td className="px-4 py-2 text-center text-slate-800">7{student.francais}</td>
                <td className="px-4 py-2 text-center text-slate-800">8{student.histoire}</td>
            </tr>
          )
        })
      }
    </tbody>
</table> */}
<Upload/>

    </main>
  );
}
