-- Bank transfer / PIX destination shown on the user deposit page.
CREATE TABLE IF NOT EXISTS bank_deposit_details (
  id TINYINT UNSIGNED NOT NULL PRIMARY KEY,
  bank_name VARCHAR(150) NOT NULL,
  branch_code VARCHAR(40) NOT NULL,
  account_number VARCHAR(80) NOT NULL,
  account_holder VARCHAR(150) NOT NULL,
  tax_id VARCHAR(40) NOT NULL,
  pix_key VARCHAR(191) NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO bank_deposit_details
  (id, bank_name, branch_code, account_number, account_holder, tax_id, pix_key, is_active)
VALUES
  (1, 'Santander', '0328', '02032435-8', 'Marilson da Silva Santos', '409.093.488-55', 'Marilsondasilva409@gmail.com', 1);

ALTER TABLE deposits
  ADD COLUMN method VARCHAR(20) NOT NULL DEFAULT 'crypto';
