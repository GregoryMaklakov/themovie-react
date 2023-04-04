import { MovieList } from '../../components/MovieList'
import { category as cate, movieType } from '../../api/apiClient'
import styles from './Catalog.module.scss'
import { useParams } from 'react-router-dom'
import { HeaderTitle } from '../../components/Header/HeaderTitle/HeaderTitle'
import { MovieGrid } from '../../components/MovieGrid/MovieGrid'

export const Catalog = () => {

    const { category } = useParams();
    console.log(category);
    return (
        <div className={styles.container}>
            <HeaderTitle>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </HeaderTitle>
            <MovieGrid category={category} />
            <MovieList category={category.movie} type={movieType.popular}></MovieList>
        </div>
    )
}

Catalog.propTypes = {}

