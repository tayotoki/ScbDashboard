import Link from 'next/link';

export default function NotFound() {
  return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <div>Страница не найдена</div>
        <Link href={'/'}>Вернуться на главную</Link>
      </div>
  );
}
