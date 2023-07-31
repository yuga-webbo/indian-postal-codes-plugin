<div align="center">
    <h1>indian-postal-codes</h1>
</div>

[![Downloads/week](https://img.shields.io/npm/dw/indian-postal-codes)](https://npmjs.org/package/indian-postal-codes)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Table of contents

1. [Getting Started](#getting-started)
2. [Demo](#demo)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)

## Getting Started

indian-postal-codes provides powered by Angular, so you don't need to include original JS components.

## Demo

Indian Postal Codes components for Angular applications, demos and API documentation could be found here:
[http://thaaimozhikalvi.com/demo/pincode](http://thaaimozhikalvi.com/demo/pincode).

StackBlitz URL: [https://stackblitz.com/edit/angular-ivy-dvtntk?file=README.md](https://stackblitz.com/edit/angular-ivy-dvtntk?file=README.md)

## Installation

Install `indian-postal-codes` from `npm`:

```bash
npm install indian-postal-codes --save
```

## Usage

Add wanted package to NgModule imports:

```typescript
import {IndianPostalCodesModule} from "indian-postal-codes";

@NgModule({
  ...
  imports: [
        ...,
        IndianPostalCodesModule,
        ...]
  ...
})
```

Add component to your page:

```typescript
import {IndianPostalCodesService, PostOfficeDetails} from "indian-postal-codes";

@Component({...})

export class AppComponent {
  result: PostOfficeDetails[];
  constructor(private postalCodesService: IndianPostalCodesService) {}
}
```

Find By PinCodes:

```typescript
this.postalCodesService.findByPinCode(pinCode).subscribe(data => {
      if (data[0].Status === 'Success') {
        this.result = data[0].PostOffice;
      } else if (data[0].Status === 'Error') {
        alert(data[0].Message);
        this.result = [];
      } else if (data[0].Status === '404') {
        alert(data[0].Message);
        this.result = [];
      }
    });
```

Find By Post Office:

```typescript
this.postalCodesService.findByPostOfficeName(postOffice).subscribe(data => {
      if (data[0].Status === 'Success') {
        this.result = data[0].PostOffice;
      } else if (data[0].Status === 'Error') {
        alert(data[0].Message);
        this.result = [];
      } else if (data[0].Status === '404') {
        alert(data[0].Message);
        this.result = [];
      }
    });
```

## Creator

#### [GP DHANUSH](mailto:agprakash406@gmail.com)

- [@GitLab](https://gitlab.com/gpdhanush)

### License

indian-postal-codes is [MIT licensed](https://github.com/gpdhanush/indian-postal-codes/blob/b2279d35d3a94899da310370652abdc0f3c793d6/LICENSE).
