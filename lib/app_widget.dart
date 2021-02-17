import 'package:flutter/material.dart';

import 'home_page.dart';

class AppWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Curso Mobx',
      theme: ThemeData(

      ),
      home: HomePage(title: 'Curso Mobx'),
    );
  }
}
