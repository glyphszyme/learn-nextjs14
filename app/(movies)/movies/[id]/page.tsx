import { Suspense } from "react";
import MovieInfo, { getInfo } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type IParams = Promise<{ id: string }>;

// 🔥 타입 생략 or any 사용
export async function generateMetadata(props: { params: IParams }) {
    const params = await props.params;
    const movie = await getInfo(params.id);
    return {
        title: `${movie.title} | Next Movies`,
    };
}


export default async function MovieDetail(props: { params: IParams }) {
    const params = await props.params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={params.id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={params.id} />
            </Suspense>
        </div>
    );
}
