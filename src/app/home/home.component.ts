import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  ChangeDetectionStrategy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { TimelineMax, Linear } from 'gsap';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {

  title = 'app';
  tl;
  @ViewChild('circle') circle: ElementRef;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.tl = new TimelineMax({
          repeat: Infinity,
          repeatDelay: 2
        });

        this.tl
          .set(this.circle.nativeElement, { x: 0 })
          .from(this.circle.nativeElement, 3, {
            x: 200,
            rotation: 180,
            transformOrigin: 'center center',
            ease: Linear.ease
          })
          .from(this.circle.nativeElement, 2, {
            x: 0,
            rotation: 0,
            transformOrigin: 'center center',
            ease: Linear.ease
          });

        this.tl.play();
      });
    }

  }

}
