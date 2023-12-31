import { Typography } from '@mui/material';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <Typography variant="subtitle2" gutterBottom title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </Typography>
    )
}
export default TimeAgo