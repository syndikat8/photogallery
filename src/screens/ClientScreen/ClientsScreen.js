import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {getClients} from '../../redux/reducers/clients-reducer';
import {useDispatch, useSelector} from 'react-redux';
import Client from '../../components/Client/Client';
import styles from './style';

const ClientsScreen = ({navigation}) => {
  const {clients, isLoading} = useSelector((store) => store.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="#2F4F4F" />
      ) : (
        <View style={styles.clients}>
          {clients.lenght === 0 ? null : (
            <FlatList
              keyExtractor={(item) => item.id}
              data={clients}
              renderItem={({item}) => (
                <Client
                  regular={item.urls.regular}
                  navigation={navigation}
                  urls={item.urls.small}
                  description={item.alt_description}
                  username={item.user.username}
                />
              )}
            />
          )}
        </View>
      )}
    </>
  );
};

export default ClientsScreen;
