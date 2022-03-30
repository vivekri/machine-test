import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {postLogin} from '../../redux/actions/authAction';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../utils/colors';
import HeaderSearch from './component/headerSearch';
import NoData from './component/noData';
import ContinueButtonWithArrow from './component/continueButtonWithArrow';
import ClinicModel from '../../model/ClinicModel';
import AlphabeticFilter from './component/alphabeticFilter';
import SelectionCenterList from './component/selectionCenterList';
import * as SharedPreferenceManager from '../../manager/sharedPreference'

class ClinicScreen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    //this.disableSnackbar = this.disableSnackbar.bind(this);
    this.state = {
      filterByLetter: [],
      selectedFilterLetter: '',
      keyword: '',
      filteredData: [],
      isLoading: false,
      selectedItem:
        this.props.auth.auth.result.clinic.length > 0
          ? this.props.auth.auth.result.clinic[0]
          : '',
      selectedClinic:
        this.props.auth.auth.result.clinic.length > 0
          ? this.props.auth.auth.result.clinic[0].clinic_name
          : '',
      results: this.props.auth.auth.result.clinic,
    };
    console.log('results', this.state.results.length);
    this.signinResponse = '';
  }

  async componentDidMount() {
    this.retreiveClicicLetters();
    this.setState({filteredData: this.state.results});
  }

  retreiveClicicLetters() {
    let letters = [],
      clinicListItem = '';
    this.state.results.map(item => {
      clinicListItem = new ClinicModel(item);

      letters.push(
        clinicListItem.getClinic_Name().trim().charAt(0).toUpperCase(),
      );
    });

    this.setState({filterByLetter: Array.from(new Set(letters.sort()))});

    console.log('listttt', letters);
    console.log('unique', Array.from(new Set(letters.sort())));
  }

  onClickSearchButton(searchKey) {
    //Invokes when clicking search button
    console.log('keyyyy', searchKey);

    if (searchKey.trim() === '' && this.state.selectedFilterLetter === '') {
      this.setState({filteredData: this.state.results});
    } else if (
      searchKey.trim() != '' &&
      this.state.selectedFilterLetter === ''
    ) {
      this.getSearchResults(searchKey, this.state.selectedFilterLetter);
    } else if (searchKey != '') {
      this.getSearchResults(searchKey, this.state.selectedFilterLetter);
    }
  }

  setSelectedLetter(item) {
    console.log('itttt', item);
    let result = [];

    if (this.state.selectedFilterLetter === item && this.state.keyword === '') {
      this.setState({
        selectedFilterLetter: '',
        filteredData: this.state.results,
      });
    } else if (
      this.state.selectedFilterLetter === item &&
      this.state.keyword != ''
    ) {
      this.setState({selectedFilterLetter: ''});
      this.getSearchResults(this.state.keyword, '');
    } else {
      this.setState({selectedFilterLetter: item});

      this.getSearchResults(this.state.keyword, item);
    }
  }

  getSearchResults(searchKey, searchLetter) {
    console.log('search key', searchKey);
    console.log('search letter', searchLetter);
    let filtered_data = [],
      clinicListItem = '';
    if (searchKey === '' && searchLetter === '') {
      this.setState({filteredData: this.state.results});
    } else if (searchKey != '' && searchLetter === '') {
      console.log('111');
      if (this.state.results != '' && this.state.results.length > 0) {
        this.state.results.filter(item => {
          clinicListItem = new ClinicModel(item);
          if (
            clinicListItem
              .getClinic_Name()
              .toLowerCase()
              .includes(searchKey.toLowerCase())
          ) {
            filtered_data.push(item);
          }
        });
      }
      this.setState({filteredData: filtered_data});
    } else if (searchKey === '' && searchLetter != '') {
      console.log('222');
      if (this.state.results != '' && this.state.results.length > 0) {
        this.state.results.filter(listItem => {
          clinicListItem = new ClinicModel(listItem);
          if (
            clinicListItem
              .getClinic_Name()
              .trim()
              .toLowerCase()
              .startsWith(searchLetter.toLowerCase())
          ) {
            filtered_data.push(clinicListItem);
          }
        });
      }
      this.setState({filteredData: filtered_data});
    } else if (searchKey != '' && searchLetter != '') {
      console.log('333');

      let intermediate_data = [];
      if (this.state.results != '' && this.state.results.length > 0) {
        this.state.results.filter(item => {
          clinicListItem = new ClinicModel(item);
          if (
            clinicListItem
              .getClinic_Name()
              .toLowerCase()
              .includes(searchKey.toLowerCase())
          ) {
            intermediate_data.push(clinicListItem);
          }
        });
      }
      if (intermediate_data.length > 0) {
        intermediate_data.filter(listItem => {
          clinicListItem = new ClinicModel(listItem);
          if (
            clinicListItem
              .getClinic_Name()
              .trim()
              .toLowerCase()
              .startsWith(searchLetter.toLowerCase())
          ) {
            filtered_data.push(clinicListItem);
          }
        });
      }
      this.setState({filteredData: filtered_data});
    }
  }

  setSelectedListItem(item) {
    console.log('ittttt', item.getClinic_Name());
    this.setState({selectedClinic: item.getClinic_Name(), selectedItem: item});
  }

  selectClinic() {


    if((this.state.isConnected)&&(this.state.isInternetAvailable))
    {
    console.log("selecteddd", this.state.selectedItem)

    let clinicListItem=new ClinicModel(this.state.selectedItem)

    console.log("clinicListItem",clinicListItem.getClinic_Name())

    try {
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.clinicid, clinicListItem.get_Id().toString());
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.clinicname, clinicListItem.getClinic_Name().toString());
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.clinic_location, clinicListItem.getClinic_Region().toString());
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.isloggedin, 'true');
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.clinic_number, clinicListItem.getClinic_Id().toString());
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.clinic_code, clinicListItem.get_Clinic_Code().toString());
      //    SharedPreferenceManager.SharedPreference.setSharedPreferenceValues(SharedPreferenceManager.clinic_region_id, clinicListItem.getClinic_RegionID().toString());
       
      //  //await AsyncStorage.setItem("isFirstTime",'true')

      
      //  this.props.navigation.replace('DashBoard');
      
       

    } catch (error) {
        console.log('error', error)
        // Error saving data
    }
}
  }

  componentWillUnmount() {}

  render() {
    console.log(this.props);
    if (this.props.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <HeaderSearch
            toolbarTitle="Select Center"
            searchKey={key => {
              this.setState({keyword: key}),
                this.getSearchResults(key, this.state.selectedFilterLetter);
            }}
            onClickCloseSearchBox={() =>
              this.getSearchResults('', this.state.selectedFilterLetter)
            }
            onClickBack={() => {}}
          />

          {this.state.filterByLetter != null &&
          this.state.filterByLetter.length > 0 &&
          !this.state.showConsolidated ? (
            <AlphabeticFilter
              filterByLetter={this.state.filterByLetter}
              onClickItem={item => this.setSelectedLetter(item)}
            />
          ) : null}

          {/* Clinic lists Section */}
          {this.state.filteredData != null &&
          this.state.filteredData.length > 0 ? (
            <View style={{flex: 1, marginTop: 24}}>
              <FlatList
                contentContainerStyle={{flexGrow: 1}}
                data={this.state.filteredData}
                extraData={this.state}
                keyExtractor={(item, index) => (item.key = index.toString())}
                renderItem={({item, index}) => {
                  let clinicListItem = new ClinicModel(item);
                  console.log('clinic:', clinicListItem.getClinic_Name);
                  // ****************List item view ***************
                  return (
                    <TouchableOpacity
                      style={{
                        width: '100%',
                        minHeight: 68,
                        backgroundColor: '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                      onPress={() => this.setSelectedListItem(clinicListItem)}>
                      <SelectionCenterList
                        heading={clinicListItem.getClinic_Name()}
                        details={clinicListItem.getClinic_Region()}
                        isSelected={
                          this.state.selectedClinic ==
                          clinicListItem.getClinic_Name()
                        }
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <NoData />
            </View>
          )}

          {/* {!this.state.isInternetAvailable ? <NoInternetSnackBar /> : null}

          {this.state.isShowErrorSnackbar ? (
            <ErrorSnackBar message={this.state.snackbarMessage} />
          ) : null} */}
        </View>

        <ContinueButtonWithArrow onPressContinue={() => this.selectClinic()} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {postLogin})(function (props) {
  const navigation = useNavigation();

  return <ClinicScreen {...props} navigation={navigation} />;
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  statusBar: {
    width: '100%',
    height: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  lightBlueView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',

    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  darkBlueView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: Colors.primaryColorDark,
    justifyContent: 'space-between',
  },
});
