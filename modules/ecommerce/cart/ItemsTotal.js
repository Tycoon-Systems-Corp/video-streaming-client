import React from"react";import{calculateTotal,resolveMoneyFormat}from"/modules/utility/ecommerce/ecommerce.js";const Module=e=>{var a=e?.useTax??e?.paymentConfig?.tax?.all??0,c=calculateTotal(e?.useCartOfCurrency,null,{region:e?.useCartOfCurrency?.currency??null,object:!0},e);return React.createElement("div",{className:"Ecommerce_ItemsAndTax gap-p10",style:{justifyContent:"space-between",fontSize:".85rem"}},React.createElement("div",{className:"flex Price_ItemsTotal"},React.createElement("div",{className:"Ecommerce_Price_Label"},a?"Before tax":"Items",": "),React.createElement("div",{className:"Ecommerce_Price_Price"},e?.useCartOfCurrency?.currency?.symbol??null,resolveMoneyFormat(c?.totalNoTax??0))),a&&c.tax?React.createElement("div",{className:"flex Price_Tax"},React.createElement("div",{className:"Ecommerce_Price_Label"},"Tax: "),React.createElement("div",{className:"Ecommerce_Price_Price"},e?.useCartOfCurrency?.currency?.symbol??null,resolveMoneyFormat(c.tax))):null)};export default Module;