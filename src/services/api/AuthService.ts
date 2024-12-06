import globalAppConfig from '../../config/global-app-config'; 
import { SignInDto } from '../../types/interface/request/signin-dto';
import { jwtDecode } from 'jwt-decode';
import { CoreService } from './CoreService';

class AuthService extends CoreService {
  
  set emailAddress(value: string) {
    localStorage.setItem('ps_uml', value);
  }

  get emailAddress(): string {
    return localStorage.getItem('ps_uml') ?? '';
  }

  signIn = async (
    signInDetails: SignInDto,
  ): Promise<{ message: string; success: boolean; data: any }> => {
    return new Promise((resolve, reject) => {
      this.axios
        .post(`${globalAppConfig.baseApiUrl}/auth/login`, signInDetails)
        .then(async (response: any) => {
          const { success, message, data } = response.data;
          resolve({ message, success, data });
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };

  setLoginSession(token: string): void {
    localStorage.setItem('lg_tk', token);
    const tokenPayload = this.decodeToken(token);
    this.emailAddress = tokenPayload.email;
  }
  
   decodeToken = (token: string): any => {
    return jwtDecode(token);
  };
  
  getUserDetails = async ( ): Promise<{ message: string; success: boolean; data: any }> => {
    return new Promise((resolve, reject) => {
      this.axios
        .get(`${globalAppConfig.baseApiUrl}/auth/getUserList`)
        .then(async (response: any) => {
          const { success, message, data } = response.data;
          resolve({ message, success, data });
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };

}


export const authService = new AuthService();



