"use client";
import FilterSidebar from '@/components/Side-Navbar-Filter/page';
import { useRouter } from 'next/navigation';

const CategoryPage = ({params}: {params: any}) => {
  const router = useRouter();

  return (
    <div>
      <h1 className='flex text-2xl tracking-wider font-semibold justify-center my-5'>{params.category}</h1>
      <FilterSidebar/>
    </div>
  );
};

export default CategoryPage;