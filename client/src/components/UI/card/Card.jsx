import classes from './card.module.scss';

const Card = ({children, ...props}) => {
    return ( 
        <div {...props} className={classes.card}>
            {children}
        </div>
     );
}
 
export default Card;