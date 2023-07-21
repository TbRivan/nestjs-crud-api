import { AuthGuard } from '@nestjs/passport';

// Guards for calling jwt strategy
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
