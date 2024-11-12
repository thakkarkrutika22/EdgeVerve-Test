import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-chips',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-chips.component.html',
  styleUrl: './custom-chips.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomChipsComponent),
      multi: true
    }
  ]
})
export class CustomChipsComponent {
  @Input() placeholder: string = 'Add items';
  @Output() itemsChange = new EventEmitter<string[]>();
  @Output() onAdd = new EventEmitter<string>();
  @Output() onRemove = new EventEmitter<string>();
  
  items: string[] = []; // Array to hold chips
  inputText: string = ''; // Text entered by the user
  // ControlValueAccessor methods
  onChange = (items: string[]) => {};
  onTouched = () => {};

  writeValue(items: string[]): void {
    this.items = items || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  addItem() {
    if (this.inputText && !this.items.includes(this.inputText)) {
      this.items.push(this.inputText);
      this.onAdd.emit(this.inputText);
      this.itemsChange.emit(this.items);
      this.inputText = '';
    }
  }

  removeItem(index: number) {
    const removedItem = this.items.splice(index, 1)[0];
    this.onRemove.emit(removedItem);
    this.itemsChange.emit(this.items);
  }
}
