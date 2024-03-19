import { AllUsersService } from 'src/all-users/all-users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly allUserService;
    private jwtServices;
    constructor(allUserService: AllUsersService, jwtServices: JwtService);
    login(user: any): Promise<{
        access_token: string;
    }>;
}
