import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Card title='Contact Information'>
                <View style={{ margin: 10}}>
                    <Text>121, Clear Water Bay Road{"\n"}</Text>
                    <Text> </Text>
                    <Text>Clear Water Bay, Kowloon{"\n"}</Text>
                    <Text> </Text>
                    <Text>HONG KONG{"\n"}</Text>
                    <Text></Text>
                    <Text>Tel: +852 1234 5678{"\n"}</Text>
                    <Text></Text>
                    <Text>Fax: +852 8765 4321{"\n"}</Text>
                    <Text></Text>
                    <Text>Email:confusion@food.net</Text>
                </View>
            </Card>
            </Animatable.View>
        );
    }
}
export default Contact;