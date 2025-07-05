import { Suspense } from "react";
import MovieInfo, { getInfo } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const dynamic = "force-dynamic"; // (필요시 추가)

export async function generateMetadata(props: { params: { id: string } }) {
    const { id } = props.params;
    const movie = await getInfo(id);
    return {
        title: `${movie.title} | Next Movies`,
    };
}

export default async function MovieDetail(props: { params: { id: string } }) {
    const { id } = props.params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}