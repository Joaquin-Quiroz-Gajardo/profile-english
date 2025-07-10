import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../style/Proyecto1Slider.css';
import { Typography } from '@mui/material';
import uncertantySamplingLeastConfident from "../Imagenes/uncertanty samplin least confident.png"
import uncertantyMarginalSampling from "../Imagenes/uncertanty marginal sampling.png"
import ClusterBaseStrategies from "../Imagenes/cluster base strategies.png"
import queryByCommitte from "../Imagenes/query by committe.png"
import TokenGeneration from "../Imagenes/token generation.png"
import TextGeneration from "../Imagenes/text generation.png"


const FadeExample = () => {
  const images = [
    uncertantySamplingLeastConfident,
    uncertantyMarginalSampling,
    ClusterBaseStrategies,
    queryByCommitte,
    TokenGeneration,
    TextGeneration,
  ];

  return (
    <div style={{marginBottom: "25px"}}>
      <Fade>
        <div className="each-slide">
          <div>
            <img src={images[0]} />
          </div>
          <Typography variant='body1' component="p">Uncertainty sampling least confident: They are chosen to classify examples from the unpredicted database for which the model presents less certainty in its prediction.</Typography>
        </div>
        <div className="each-slide">
          <Typography variant='body1' component="p">Uncertainty marginal sampling: It consists of selecting the unclassified examples that contain the smallest difference between the two classes predicted by the model.</Typography>
            <div>
              <img src={images[1]} />
            </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={images[2]} />
          </div>
            <Typography variant='body1' component="p">Cluster based strategies: It consists of selecting examples from the unclassified database that belong to the least common categories, according to the model's prediction.</Typography>
        </div>
        <div className="each-slide">
          <Typography variant='body1' component="p">Query by committee: This strategy implements an ensemble of models. The examples from the unclassified database that generate the greatest disagreement between the model's predictions are selected.</Typography>
          <div>
            <img src={images[3]} />
          </div>
        </div>
        <div className="each-slide">
        <div>
          <img src={images[4]} />
        </div>
        <Typography variant='body1' component="p">Token generation: This active learning strategy implements a data augmentation strategy, which consists of replacing tokens from minority classes with other tokens with similar meaning, thus increasing the examples in minority classes..</Typography>
        </div>
            <div className="each-slide">
            <Typography variant='body1' component="p">Text generation: Examples of the minority classes are created by a text generating model, in this case BERT was used.</Typography>
            <div>
                <img src={images[5]} />
            </div>
            
            </div>
      </Fade>
    </div>
  );
};

export default FadeExample;