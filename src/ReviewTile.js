

const ReviewTile = props => (
    <div className="review">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <name><b>Name: </b>{props.name}</name>
            <br />
            <rating><b>Rating: </b>{props.rating}</rating>
            <br />
            <comment><b>Comment: </b>{props.comment}</comment>
        </div>
    </div>
);

export default ReviewTile;