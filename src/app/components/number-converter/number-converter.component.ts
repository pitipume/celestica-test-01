import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-converter.component.html',
  styleUrl: './number-converter.component.scss'
})
export class NumberConverterComponent {
  public inputNumber: number | null = null
  public wordTH: string = ''

  private readonly units = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
  private readonly digits = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];

  constructor() { }

  convertToTH(): void {
    if (this.inputNumber !== null) {
      this.wordTH = this.convert(this.inputNumber)
    }
  }

  convert(num: number) {
    if (num === 0) return 'ศูนย์'

    const units = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน']
    const digits = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า']

    let result = ''
    const numStr = num.toString()
    const len = numStr.length

    for (let i = 0; i < len; i++) {
      const digit = parseInt(numStr[i])
      const unitIndex = len - 1 - i

      if (digit === 0) {
        if (unitIndex === 1 && len > 1 && numStr[i + 1] !== '0') {
          result += 'สิบ'
        }
        continue
      }

      if (unitIndex === 1) {
        if (digit === 1) {
          result += 'สิบ'
        } else if (digit === 2) {
          result += 'ยี่สิบ'
        } else {
          result += digits[digit] + 'สิบ'
        }
      } else {
        result += digits[digit] + units[unitIndex]
      }
    }

    if (numStr.endsWith('1') && numStr.length > 1 && numStr[numStr.length - 2] !== '0') {
      result = result.slice(0, -2) + 'เอ็ด'
    } else if (result.endsWith('หนึ่ง')) {
        // Handles single digit '1' or cases like '101'
    }
    
    return result
  }
}
