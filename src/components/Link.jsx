import PropTypes from 'prop-types';

const Link = ({route}) => {
    
    return (
        <ul>
            <li className='mr-5 font-bold hover:bg-red-500'><a href={route.path}>{route.name}</a></li>
        </ul>
    );
};

Link.propTypes ={
    route:PropTypes.object
}
export default Link;