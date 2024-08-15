import { Movie } from '../@types/movie';

type Props = {
  label: string;
  movies?: Movie[] | [];
}

export function Section({ label, movies }: Props) {
  return (
    <div className='flex flex-col justify-start gap-5'>
      <h1 className="font-bold">{label}</h1>
      <div className="flex items-center gap-2">
      {
        movies?.map(({id, bg}) => (
          <img key={id} src={bg} alt="banner" className='h-[200px] w-[300px] object-fill' />
        ))
      }
      </div>
    </div>
  )
}
