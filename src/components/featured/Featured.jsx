
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import './featured.scss';

const Featured = () => {
    return (
        <div className='featured'>
            <img src="https://images.moviesanywhere.com/9e198d678b3e47f808f5a8f27f3e1e18/1b75cfe6-be1a-409f-b296-7f38e345fc9d.jpg?w=2560&r=16x9" alt="" width='100%' />

            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati enim hic 
                    cupiditate porro molestiae earum quasi veniam sit sint perspiciatis nihil dolorem incidunt 
                    libero, suscipit, delectus, quia officiis cum.
                </span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured