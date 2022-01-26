import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef =
  createNavigationContainerRef<Navigation.RootStackParamList>();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function replace(name: string) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name}],
    });
  }
}
