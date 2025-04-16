import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-categories-stats',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentCategoriesStats {

  readonly ChevronDown = ChevronDown;

  categories = [
    {
      name: 'Pedidos',
      link: '/dashboard/pedidos',
      quantity: 3526,
      minRange: 0,
      maxRange: 5000,
      isActive: true
    },
    {
      name: 'Ventas',
      link: '/dashboard/ventas',
      quantity: 22639.60,
      minRange: 0,
      maxRange: 50000,
      isActive: false
    }
  ]

  // Esta propiedad representa el item seleccionado actualmente
  selectedCategory = this.categories.find(cat => cat.isActive) || this.categories[0];

  // Props para animación
  quantityDisplay: number = 0;
  progressPercentage: number = 0;

  ngOnInit() {
    this.animateAll();
  }

  selectCategory(categoryName: string) {
    this.categories.forEach(cat => cat.isActive = cat.name === categoryName);
    this.selectedCategory = this.categories.find(cat => cat.name === categoryName)!;
    this.animateAll();
  }

  private animateAll() {
    this.animateQuantity(this.selectedCategory.quantity);
    const percent = (this.selectedCategory.quantity / this.selectedCategory.maxRange) * 100;
    this.animateProgress(percent);
  }

  private animateQuantity(target: number, duration: number = 1000) {
    const start = performance.now();
    const initial = 0;

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      this.quantityDisplay = Math.floor(initial + (target - initial) * progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private animateProgress(targetPercent: number, duration: number = 1000) {
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      this.progressPercentage = targetPercent * progress;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

}
