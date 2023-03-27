import { NavLink } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import HeroSlide from '../../components/HeroSlide/HeroSlide'
import { MovieList } from '../../components/MovieList';
import { category, movieType, tvType } from '../../api/apiClient'
import styles from './Home.module.scss'

export const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.section}>
                        <div className={styles.heading}>
                            <h2 className={styles.title}>Trending Movie</h2>
                            <NavLink to='/movie'>
                                <Button className={styles.button} variant='secondary' size='s'>Viev More</Button>
                            </NavLink>
                        </div>
                        <MovieList category={category.movie} type={tvType.popular}></MovieList>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.heading}>
                            <h2 className={styles.title}>Top Rated</h2>
                            <NavLink to='/'>
                                <Button className={styles.button} variant='secondary' size='s'>Viev More</Button>
                            </NavLink>
                        </div>
                        <MovieList category={category.movie} type={movieType.top_rated}></MovieList>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.heading}>
                            <h2 className={styles.title}>Top Rated TV</h2>
                            <NavLink to='/'>
                                <Button className={styles.button} variant='secondary' size='s'>Viev More</Button>
                            </NavLink>
                        </div>
                        <MovieList category={category.tv} type={tvType.top_rated}></MovieList>
                    </div>
                </div>
            </div>
        </>
    )
}


