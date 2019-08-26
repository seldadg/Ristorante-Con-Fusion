import React, { Component } from 'react';
import { Card, Button, Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['confusion@food.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        })
    }

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
                    <Text></Text>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail}
                        />
                </View>
            </Card>
            </Animatable.View>
        );
    }
}
export default Contact;