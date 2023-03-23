import PropTypes from 'prop-types'
import { MovieList } from '../../components/MovieList'
import { category, movieType } from '../../api/apiClient'
import styles from './Catalog.module.scss'
export const Catalog = () => {
    return (
        <div className={styles.container}>
            <MovieList category={category.movie} type={movieType.popular}></MovieList>
        </div>
    )
}

Catalog.propTypes = {}

