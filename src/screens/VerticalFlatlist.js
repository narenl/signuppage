import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
 
export default class VerticalFlatlist extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
     refresh: false,
   };
 }
 
 componentDidMount() {
   // this.makeRemoteRequest();
 }
 
 renderHeader = () => {
   return (
     <View>
       <Text style={styles.header}>Employees</Text>
     </View>
   );
 };
 
 renderFooter = () => {
   return (
     <View>
       <Text style={styles.footer}>End</Text>
     </View>
   );
 };
 
 emptyListView = () => {
   return (
     <View>
       <Text>No records found.</Text>
     </View>
   );
 };
 
 renderSeparator = () => {
   return <View style={styles.itemSeparator}></View>;
 };
 
 onItemSelect = item => {
   console.log('item', item);
 };
 
 render() {
   let data = [
     { id: 1, name: 'John Brahm', designation: 'Project Manager' },
     { id: 2, name: 'Tom Jack', designation: 'Software Engineer' },
     { id: 3, name: 'Mark Bell', designation: 'QA Engineer' },
     { id: 4, name: 'Marshall Doe', designation: 'Software Engineer' },
     { id: 5, name: 'John Dow', designation: 'Product Manager' },
     { id: 6, name: 'Harry Jam', designation: 'Team Lead' },
     { id: 7, name: 'Oliver James', designation: 'Graphic Designer' },
     { id: 8, name: 'Ella Avery', designation: 'QA Engineer' },
     { id: 9, name: 'William Thomas', designation: 'Graphic Designer' },
     { id: 10, name: 'Edward Brian', designation: 'Team Lead' },
   ];
   return (
     <View style={styles.container}>
       <FlatList
         data={data}
         extraData={this.state}
         keyExtractor={item => item.id}
         ListHeaderComponent={this.renderHeader}
         ListFooterComponent={this.renderFooter}
         ListEmptyComponent={this.emptyListView}
         ItemSeparatorComponent={this.renderSeparator}
         renderItem={({item}) => {
           return (
             <TouchableOpacity
               onPress={() => {
                 this.onItemSelect(item);
               }}>
               <View style={styles.flatlist}>
                 <Text style={styles.heading2}>{item.name}</Text>
                 <Text style={styles.subheading}>{item.designation}</Text>
               </View>
             </TouchableOpacity>
           );
         }}
       />
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 header: {
   fontSize: 30,
   paddingVertical: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#DCDCDC',
 },
 footer: {
   fontSize: 30,
   paddingVertical: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#DCDCDC',
 },
 flatlist: {
   paddingVertical: 30,
   paddingHorizontal: 10,
 },
 heading2: {
   fontSize: 18,
 },
 subheading: {
   color: 'grey',
 },
 itemSeparator: {
   backgroundColor: 'green',
   height: 1,
 },
});