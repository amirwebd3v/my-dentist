
import type { MaskInputOptions } from 'maska'

export function usePersianMask() {
    const persianLettersMask: MaskInputOptions = {
        mask: 'L*',
        tokens: {
            'L': {
                pattern: /(?![\u06F0-\u06F9])[\u0600-\u06FF\s]/,
                multiple: true,
                transform: (v: string) => v.replace(/[^\u0600-\u06FF\s]|[\u06F0-\u06F9]/g, '')
            }
        },
        preProcess: (value: string) => value.replace(/[a-zA-Z0-9]/g, '')
    }

    const persianNumbersMask: MaskInputOptions = {
        mask: 'N*',
        tokens: {
            'N': {
                pattern: /[۰-۹]/,
                multiple: true,
                transform: (v: string) => v.replace(/[^۰-۹]/g, '')
            }
        },
        preProcess: (value: string) => {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return value.split('')
                .map(char => {
                    const digit = persianDigits.indexOf(char);
                    return digit !== -1 ? persianDigits[digit] : '';
                }).join('');
        }
    }

    const persianAlphanumericMask: MaskInputOptions = {
        mask: 'A*',
        tokens: {
            'A': {
                pattern: /[\u0600-\u06FF۰-۹\s]/,
                multiple: true,
                transform: (v: string) => v.replace(/[^\u0600-\u06FF۰-۹\s]/g, '')
            }
        },
        preProcess: (value: string) => {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return value.split('').map(char => {
                const digit = parseInt(char);
                return isNaN(digit) ? char.replace(/[a-zA-Z]/g, '') : persianDigits[digit];
            }).join('');
        }
    }

    const mobilePersianNumberMask: MaskInputOptions = {
        mask: '۰۹##-###-####',
        tokens: {
            '#': {
                pattern: /[۰-۹]/,
                transform: (v: string) => v.replace(/[^۰-۹]/g, '')
            }
        },
        preProcess: (value: string) => {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return value.split('').map(char => {
                const digit = parseInt(char);
                return isNaN(digit) ? char : persianDigits[digit];
            }).join('');
        }
    }

    const englishAlphanumericMask: MaskInputOptions = {
        mask: 'A*',
        tokens: {
            'A': {
                pattern: /[a-zA-Z0-9\s@_.\-]/,
                multiple: true,
                transform: (v: string) => v.replace(/[^a-zA-Z0-9\s@_.\-]/g, '')
            }
        },
        preProcess: (value: string) => {
            // Remove any non-English letters, non-Arabic numerals, and non-space characters
            return value.replace(/[^a-zA-Z0-9\s@_.\-]/g, '');
        }
    }

    return {
        persianLettersMask,
        persianNumbersMask,
        persianAlphanumericMask,
        mobilePersianNumberMask,
        englishAlphanumericMask
    }
}