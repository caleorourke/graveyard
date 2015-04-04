/*
 #  Sample data and functions for Morris charts
 #
 #  Copyright © SoftLayer, an IBM Company
 #  Code and documentation licensed under MIT
 */

$(function() {
  Morris.Line({
    element: 'morris-line-chart',
    data: [{
      minute: '2014-02-24 11:00',
      cpuTime: '0.42',
      dataIn: '0.8',
      dataOut: '0.8',
      diskReads: '0',
      diskWrites: '0'
    }, {
      minute: '2014-02-24 11:10',
      cpuTime: '2.56',
      dataIn: '3.49',
      dataOut: '4.88',
      diskReads: '2',
      diskWrites: '0'
    }, {
      minute: '2014-02-24 11:20',
      cpuTime: '7.21',
      dataIn: '9.11',
      dataOut: '10.78',
      diskReads: '4',
      diskWrites: '0'
    }, {
      minute: '2014-02-24 11:30',
      cpuTime: '13.00',
      dataIn: '15.48',
      dataOut: '16.03',
      diskReads: '6',
      diskWrites: '8'
    }, {
      minute: '2014-02-24 11:40',
      cpuTime: '15.47',
      dataIn: '8.44',
      dataOut: '16.8',
      diskReads: '8',
      diskWrites: '4'
    }, {
      minute: '2014-02-24 11:50',
      cpuTime: '25.03',
      dataIn: '4.54',
      dataOut: '22.8',
      diskReads: '32',
      diskWrites: '4'
    }, {
      minute: '2014-02-24 12:00',
      cpuTime: '27.06',
      dataIn: '5.38',
      dataOut: '23.03',
      diskReads: '32',
      diskWrites: '4'
    }],
    xkey: 'minute',
    ykeys: ['cpuTime', 'dataIn', 'dataOut', 'diskReads', 'diskWrites'],
    labels: ['CPU Time', 'Data In', 'Data Out', 'Disk Reads', 'Disk Writes'],
    lineColors: ['#00ad51', '#d44542', '#a02724', '#298fce', '#1b608a'],
    pointSize: 4,
    hideHover: 'auto',
    resize: false
  });
});
