import './index.scss';

const AnimatedLetter = ({letterClass, strArray, idx}) => {

    return(
        <span>
        {
            strArray.map((char, i) => {
                return(
                    <span key={char+i} className={`${letterClass} _${idx+i}`}>
                       {char}
                    </span>
                )
            })
        }
        </span>
    )


}

export default AnimatedLetter;