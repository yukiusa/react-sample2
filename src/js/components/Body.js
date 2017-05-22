/**
 * Body * @author yukiusa
 */
import React from "react";
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default class Body extends React.Component {
    render() {
        return (
          <div>
              <Card style={{width: '350px'}}>
                  <CardTitle
                      avatar="https://pbs.twimg.com/profile_images/866181091689807872/knqoOpQS_400x400.jpg"
                      title="ゆきうさtoolboxサンプル"
                      subtitle="ここがサブタイトルだぜ"
                  />
                  <CardMedia
                      aspectRatio="wide"
                      image="https://placeimg.com/800/450/nature"
                  />
              </Card>
          </div>
        );
    }
}
