import globalAppConfig from '../../config/global-app-config'; 
import { ProjectRequestDto } from '../../types/interface/request/project-dto';
import { ProjectResponse } from '../../types/interface/response/project-response-dto';
import { CoreService } from './CoreService';


class ProjectService extends CoreService {
    
    getProjectPaginatedList = async (
        projectDetails: ProjectRequestDto,
      ): Promise<{ message: string; success: boolean; data: any }> => {
        return new Promise((resolve, reject) => {
          this.axios
            .post(`${globalAppConfig.baseApiUrl}/project/paginated`, projectDetails)
            .then(async (response: any) => {
              const { success, message, data } = response.data;
              resolve({ message, success, data });
            })
            .catch((err) => {
              reject(err.response.data.message);
            });
        });
      };

      getProjectList = async (): Promise<{ message: string; success: boolean; data: any }> => {
        return new Promise((resolve, reject) => {
          this.axios
            .get(`${globalAppConfig.baseApiUrl}/project/list`)
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
export const projectService = new ProjectService();