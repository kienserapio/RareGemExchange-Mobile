import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Modal, Pressable, Text as RNText, View } from 'react-native';

import { colors } from '@/constants';

import { countryCodes, type CountryCode } from '../data/countryCodes';

interface CountryCodePickerProps {
  value: CountryCode;
  onChange: (country: CountryCode) => void;
}

/** Dial-code selector for the mobile number field; opens a bottom-sheet list. */
export function CountryCodePicker({ value, onChange }: CountryCodePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        className="flex-row items-center gap-1 border-r border-track pr-3"
      >
        <RNText className="font-jakarta-semibold text-[14px] text-gold">{value.dialCode}</RNText>
        <Feather name="chevron-down" size={14} color={colors.label} />
      </Pressable>

      <Modal visible={open} animationType="slide" transparent onRequestClose={() => setOpen(false)}>
        <Pressable className="flex-1 justify-end bg-black/70" onPress={() => setOpen(false)}>
          <View className="max-h-[60%] border-t border-gold-border/20 bg-charcoal">
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item.iso}
              renderItem={({ item }) => (
                <Pressable
                  className="flex-row items-center justify-between border-b border-track/40 px-6 py-4"
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                >
                  <RNText className="font-jakarta text-[14px] text-subtitle">{item.name}</RNText>
                  <RNText className="font-jakarta-semibold text-[14px] text-gold">
                    {item.dialCode}
                  </RNText>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}
