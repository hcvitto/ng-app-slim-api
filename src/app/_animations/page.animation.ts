import { 
  trigger,
  style, 
  transition, 
  animate } from '@angular/animations';

export const enter = trigger('fadeIn',
  [
    transition(':enter, :leave',
      [
        style({transform: 'scale(.96)', opacity: .5}),
        animate('200ms ease-in-out')
      ]
    )
  ],
);
