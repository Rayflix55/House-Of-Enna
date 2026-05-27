/**
 * Translates HEX color codes used in the tailoring fabric selection
 * into elegant, human-readable color descriptions for checkout summaries & WhatsApp order templates.
 */
export const getColorName = (hex: string): string => {
  if (!hex) return 'Default Style';
  const cleanHex = hex.trim().toUpperCase();

  const colorMap: Record<string, string> = {
    '#EAB308': 'Yellow',
    '#000000': 'Black',
    '#043327': 'Forest Green',
    '#e25c30': 'Coral Red',
    '#eae3d5': 'Beige Cream',
    '#EF4444': 'Red',
    '#10B981': 'Green',
    '#FFFFFF': 'White',
    '#D4AF37': 'Gold',
    '#722F37': 'Wine Burgundy',
    '#DB2777': 'Pink',
    '#1E293B': 'Slate Grey',
    '#0F172A': 'Jet Black',
    '#059669': 'Forest Green',
  };

  return colorMap[cleanHex] || hex;
};
