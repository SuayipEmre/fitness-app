import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { sliderImages } from '../../constants/sliderImages';

const{width, height} = Dimensions.get('window')

const ImageSlider =() => {
  return (
    <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={width}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={width-70}
        slideStyle={{display: 'flex', alignItems: 'center'}}
    />

  )
}

export default ImageSlider

const ItemCard = ({item, index}, parallaxProps)=>{
    return (
        <View style={{width:width-70, height: height * 0.25}}>
            <ParallaxImage
                source={item}
                containerStyle={{borderRadius: 30, flex:1}}
                style={{resizeMode: 'contain'}}
                parallaxFactor={1}
                {...parallaxProps}
            />
        </View>
    )
}