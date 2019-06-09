import React from 'react';
import { StyleSheet, 
         ScrollView, 
         Text, 
         View 
} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Maio','Jun','Jul.','Ago','Set','Out','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'pt-br';

export default class LinksScreen extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.getStartedText}>
              Calendário Compesa
            </Text>
            <CalendarList
              horizontal={true}
              pagingEnabled={true}
              minDate={'2019-06-01'}
              // Collection of dates that have to be marked. Default = {}
              markedDates={{
                '2019-06-13': {startingDay: true, color: '#FFA07A'},
                '2019-06-14': {endingDay: true, color: '#FFA07A'},
              }}
              markingType={'period'}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 40,
    textAlign: 'center',
  },
});
