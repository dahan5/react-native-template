import HomeScreen from 'screens/Home';
import CustomWebView from 'screens/CustomWebView';
import NetworkError from 'screens/NetworkError';

export type UserStackParamList = {
  Home: undefined;
};

export type CommonStackParamList = {
  WebView: { url: string; title: string };
  NetworkError: undefined;
};

const options = { gestureEnabled: false };

export const commonScreens = {
  NetworkError: { component: NetworkError, options },
  WebView: { component: CustomWebView },
};

export const userScreens = {
  Home: { component: HomeScreen },
};

