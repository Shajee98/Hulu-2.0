import Image from "next/image";
import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';


const Thumbnail = forwardRef(({result}, ref) => {
    console.log(result);

    const BASE_URL = "https://themoviedb.org/t/p/w220_and_h330_face"
    return (
        // <div ref={ref} className="p-2 cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        //     <Image layout='responsive'
        //     key={result.id}
        //             width={500}
        //             height={500}
        //             src={`${BASE_URL}${result.backdrop_path || result.poster_path}`
        //                  || `${BASE_URL}${result.poster_path}`}/>
        //                  <div className="pt-2">
        //                  <p className="truncate max-w-md">{result.overview}</p>
        //                  <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
        //                  <p className="flex items-center opacity-0 group-hover:opacity-100">{result.media_type && `${result.media_type} `}{" "}
        //                  {result.release_date || result.first_air_date} {" "}
        //                  <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}</p>
        //                  </div>
        // </div>
                <div ref={ref} className="p-2 cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Card key={result.id} style={{backgroundColor: "deepskyblue"}}>
            <CardHeader action={ <IconButton aria-label="add to favorites"><FavoriteIcon /><p>{result.vote_count}</p></IconButton>} title={result.title || result.oiginal_name || result.name} subheader={`${result.release_date || result.first_air_date}`}/>
            <Image layout='responsive'
            key={result.id}
                    width={200}
                    height={200}
                    src={`${BASE_URL}${result.backdrop_path || result.poster_path}`
                         || `${BASE_URL}${result.poster_path}`}/>
            <CardContent>
        <Typography className="truncate max-w-md" variant="body2" color="textSecondary" component="p">
          {result.overview}
        </Typography>
      </CardContent>
        </Card>
        </div>
    )
})

export default Thumbnail
