import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTestimonial = 0;
  testimonialInterval: any;

  stats = [
    { icon: '🚀', value: 500, current: 0, label: 'Proyectos Completados' },
    { icon: '💼', value: 200, current: 0, label: 'Clientes Satisfechos' },
    { icon: '👥', value: 50, current: 0, label: 'Equipo Expertos' },
    { icon: '🏆', value: 15, current: 0, label: 'Años de Experiencia' }
  ];

  services = [
    {
      icon: 'fas fa-code',
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, rápidos y responsivos.',
      hover: false
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Apps Móviles',
      description: 'Desarrollamos aplicaciones nativas e híbridas.',
      hover: false
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Diseño UI/UX',
      description: 'Diseños intuitivos que enamoran a tus usuarios.',
      hover: false
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Marketing Digital',
      description: 'Estrategias para impulsar tu presencia online.',
      hover: false
    }
  ];

  testimonials = [
    {
      text: 'Trabajar con este equipo ha sido una experiencia increíble. Superaron todas nuestras expectativas.',
      name: 'María González',
      position: 'CEO, TechStart',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      text: 'Profesionales, creativos y comprometidos. Sin duda, la mejor decisión para nuestro proyecto.',
      name: 'Carlos Ruiz',
      position: 'Director, InnovateCorp',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      text: 'La calidad de su trabajo es excepcional. Entregaron a tiempo y superaron lo esperado.',
      name: 'Ana Martínez',
      position: 'Fundadora, CreativaLab',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

  ngOnInit() {
    this.animateStats();
    this.startTestimonialSlider();
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  animateStats() {
    this.stats.forEach(stat => {
      const increment = stat.value / 50;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          stat.current = stat.value;
          clearInterval(timer);
        } else {
          stat.current = Math.floor(current);
        }
      }, 30);
    });
  }

  startTestimonialSlider() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  nextTestimonial() {
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    } else {
      this.currentTestimonial = 0;
    }
  }

  prevTestimonial() {
    if (this.currentTestimonial > 0) {
      this.currentTestimonial--;
    }
  }

  animateCard(index: number) {
    const card = document.querySelectorAll('.feature-card')[index - 1];
    card?.classList.add('animate');
  }

  resetCard(index: number) {
    const card = document.querySelectorAll('.feature-card')[index - 1];
    card?.classList.remove('animate');
  }
}