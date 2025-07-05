import { Suspense } from "react";
import MovieInfo, { getInfo } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: {
        id: string;
    };
}


export async function generateMetadata({
    params: { id },
}: IParams) {
    const movie = await getInfo(id);
    return {
        title: `${movie.title} | Next Movies`,
    }
}

export default async function MovieDetail({
    params: { id },
}: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie vidoes...</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}
