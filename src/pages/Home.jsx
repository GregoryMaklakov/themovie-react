import PropTypes from 'prop-types'
import { Button } from '../components/Button/Button'

export const Home = () => {
    return (
        <div style={{ height: '300vh' }}>
            <Button variant='primary' size="m"> Add new</Button>
            <Button variant='secondary' size="m"> Add new</Button>

            <Button variant='primary' size="s"> Add new</Button>

            <Button variant='secondary' size="s"> Add new</Button>
        </div>
    )
}

Home.propTypes = {}

