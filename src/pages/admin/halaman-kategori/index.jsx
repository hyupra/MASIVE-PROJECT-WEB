import React from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { Button, Card } from "@mui/material"
import { Link } from 'react-router-dom';



function HalamanKategori() {
  return (
    <>
    <div className='container mx-auto mt-8'>
    <div><h3>Overview Kategori</h3></div>
<div className="mt-4 float-right">
<Link to="/admin/tambahkategori">
<ButtonBorder>
    Tambah Data</ButtonBorder>
</Link>

</div><br />
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs  text-black uppercase bg-FFF3F3-50 dark:bg-red-100 dark:text-black">
            <tr>
                <th scope="col" className="px-6 py-3">
                    No
                </th>
                <th scope="col" className="px-6 py-3">
                    Kategori Soal
                </th>
                <th scope="col" className="px-6 py-3">
                    Jumlah Unit
                </th>
                <th scope="col" className="px-6 py-3">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    1
                </th>
                <td className="px-6 py-4">
                    Beginner
                </td>
                <td className="px-6 py-4">
                    4
                </td>
                <td className="px-6 py-4 space-x-2">
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Delete></Delete></Button></Link>
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Edit></Edit></Button></Link>
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Visibility></Visibility></Button></Link>
                
                </td>
            </tr>
            <tr className="odd:bg-gray odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    1
                </th>
                <td className="px-6 py-4">
                    Intermidate
                </td>
                <td className="px-6 py-4">
                    4
                </td>
                <td className="px-6 py-4 space-x-2">
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Delete></Delete></Button></Link>
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Edit></Edit></Button></Link>
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Visibility></Visibility></Button></Link>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    3
                </th>
                <td className="px-6 py-4">
                    Advance
                </td>
                <td className="px-6 py-4">
                    4
                </td>
                <td className="px-6 py-4 space-x-2">
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Delete></Delete></Button></Link>
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Edit></Edit></Button></Link>
                <Link to="/admin/beginer"><Button color="error" variant="contained"><Visibility></Visibility></Button></Link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
    <div className="mt-3  float-right mr-14">
    <Stack spacing={2}>
      <Pagination count={5} variant="outlined" shape="rounded" />
    </Stack>
    </div>
    </>
  )
}

export default HalamanKategori