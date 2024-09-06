import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe({
      next: () => {
        const route = this.activatedRoute.snapshot.queryParamMap.get('redirectTo') || '';
        this.router.navigateByUrl(route);
      },
      error: (err) => {
        alert('Wrong credentials');
        console.log(err);
      }
    });
  }
}
